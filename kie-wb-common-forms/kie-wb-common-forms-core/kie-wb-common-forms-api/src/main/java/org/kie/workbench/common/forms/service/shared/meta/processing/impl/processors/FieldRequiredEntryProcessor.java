/*
 * Copyright 2017 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.kie.workbench.common.forms.service.shared.meta.processing.impl.processors;

import javax.enterprise.context.Dependent;

import org.kie.workbench.common.forms.model.FieldDefinition;
import org.kie.workbench.common.forms.model.impl.meta.entries.FieldRequiredEntry;
import org.kie.workbench.common.forms.service.shared.meta.processing.MetaDataEntryProcessor;

@Dependent
public class FieldRequiredEntryProcessor implements MetaDataEntryProcessor<FieldRequiredEntry, FieldDefinition> {

    @Override
    public String getEntryName() {
        return FieldRequiredEntry.NAME;
    }

    @Override
    public Class<FieldRequiredEntry> getEntryClass() {
        return FieldRequiredEntry.class;
    }

    @Override
    public void process(FieldRequiredEntry entry, FieldDefinition fieldDefinition) {
        fieldDefinition.setRequired(entry.getValue());
    }
}
