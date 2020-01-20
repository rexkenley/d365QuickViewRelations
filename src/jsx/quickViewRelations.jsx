import React, { useReducer } from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson
} from "office-ui-fabric-react/lib/DocumentCard";
import { Stack, IStackTokens } from "office-ui-fabric-react/lib/Stack";

const QuickViewRelations = props => {
  const { context, isControlDisabled, primaryEntityId, relationship } = props;
  // context.navigation.openForm(options, parameters)
  return (
    <Fabric>
      <Stack>
        <DocumentCard></DocumentCard>
      </Stack>
    </Fabric>
  );
};

/** @module quickViewRelations */
export default QuickViewRelations;
