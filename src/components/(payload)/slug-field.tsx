"use client";

import { Button, FieldLabel, TextInput, useField, useForm, useFormFields } from "@payloadcms/ui";
import type { TextFieldClientProps } from "payload";
import React, { useCallback, useEffect } from "react";

import { createSlug } from "@/utils/create-slug";

type SlugFieldProps = {
  checkboxFieldPath: string;
  fieldToUse: string;
} & TextFieldClientProps;

export const SlugField: React.FC<SlugFieldProps> = ({
  checkboxFieldPath: checkboxFieldPathFromProps,
  fieldToUse,
  field,
  path = "",
  readOnly: readOnlyFromProps,
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
        const formattedSlug = createSlug(targetFieldValue);

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
    <div className="slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} />

        <Button className="lock-button" buttonStyle="none" onClick={handleLock}>
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
