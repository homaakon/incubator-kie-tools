/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Page, PageSidebar } from "@patternfly/react-core/dist/js/components/Page";
import React, { useEffect, useState } from "react";
import { componentOuiaProps, ouiaAttribute, OUIAProps } from "../../ouiaTools";
import "../styles.css";

interface IOwnProps {
  children: React.ReactNode;
  BrandSrc?: string;
  PageNav: React.ReactNode;
  pageNavOpen?: boolean;
  BrandAltText?: string;
  BrandClick?: () => void;
}

const PageLayout: React.FC<IOwnProps & OUIAProps> = ({
  children,
  BrandSrc,
  PageNav,
  pageNavOpen,
  BrandAltText,
  BrandClick,
  ouiaId,
  ouiaSafe,
}) => {
  const pageId = "main-content-page-layout-default-nav";

  const [isNavOpen, setIsNavOpen] = useState(pageNavOpen != undefined ? pageNavOpen : true);
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (document.getElementById(pageId)) {
      document.getElementById(pageId)?.setAttribute("data-ouia-main", "true");
    }
  });

  const Sidebar = (
    <PageSidebar
      nav={PageNav}
      isNavOpen={isNavOpen}
      theme="dark"
      {...ouiaAttribute("data-ouia-navigation", "true")}
      data-testid="page-sidebar"
    />
  );

  return (
    <React.Fragment>
      <Page
        mainContainerId={pageId}
        sidebar={Sidebar}
        className="kogito-consoles-common--PageLayout"
        {...componentOuiaProps(ouiaId, "page", ouiaSafe)}
      >
        {children}
      </Page>
    </React.Fragment>
  );
};

export default PageLayout;
