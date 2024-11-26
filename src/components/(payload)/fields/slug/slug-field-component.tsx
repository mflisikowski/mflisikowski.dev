"use client";

import { Button, FieldLabel, TextInput, useField, useForm, useFormFields } from "@payloadcms/ui";
import type { TextFieldClientProps } from "payload";
import React, { useCallback, useEffect } from "react";

import { normalizeString } from "@/utils/normalize-string";

interface SlugFieldComponentProps extends TextFieldClientProps {
  checkboxFieldPath: string;
  fieldToUse: string;
}

export const SlugFieldComponent: React.FC<SlugFieldComponentProps> = ({
  checkboxFieldPath: checkboxFieldPathFromProps,
  readOnly: readOnlyFromProps,
  fieldToUse,
  field,
  path,
}) => {
  const { label } = field;

  const checkboxFieldPath = path?.includes(".")
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps;

  const { value, setValue } = useField<string>({ path: path || field.name });
  const { dispatchFields } = useForm();

  // The value of the checkbox
  // We're using separate useFormFields to minimise re-renders
  const checkboxValue = useFormFields(([fields]) => {
    return fields[checkboxFieldPath]?.value as string;
  });

  // The value of the field we're listening to for the slug
  const targetFieldValue = useFormFields(([fields]) => {
    return fields[fieldToUse]?.value as string;
  });

  useEffect(() => {
    if (checkboxValue) {
      if (targetFieldValue) {
        const formattedSlug = normalizeString(targetFieldValue);

        if (value !== formattedSlug) setValue(formattedSlug);
      } else {
        if (value !== "") setValue("");
      }
    }
  }, [targetFieldValue, checkboxValue, setValue, value]);

  const handleLock = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      dispatchFields({
        type: "UPDATE",
        path: checkboxFieldPath,
        value: !checkboxValue,
      });
    },
    [checkboxValue, checkboxFieldPath, dispatchFields],
  );

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor={`field-${path}`} label={label} />

        <Button className="m-0" buttonStyle="none" onClick={handleLock}>
          {checkboxValue ? "Unlock" : "Lock"}
        </Button>
      </div>

      <TextInput
        readOnly={Boolean(readOnlyFromProps || checkboxValue)}
        onChange={setValue}
        value={value}
        path={path || field.name}
      />
    </div>
  );
};
