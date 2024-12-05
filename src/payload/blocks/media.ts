import type { Block } from "payload";

import { richTextField } from "@/payload/fields/rich-text";
import { selectField } from "@/payload/fields/select";
import { uploadField } from "@/payload/fields/upload";

const mediaBlockPosition = selectField({
  defaultValue: "default",
  name: "position",
  options: [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Wide",
      value: "wide",
    },
  ],
});

const mediaBlockCaption = richTextField({
  name: "caption",
});

const mediaBlockUpload = uploadField({
  required: true,
  name: "media",
});

export const MediaBlock: Block = {
  fields: [
    //
    mediaBlockPosition,
    mediaBlockCaption,
    mediaBlockUpload,
  ],

  slug: "mediaBlock",
};
