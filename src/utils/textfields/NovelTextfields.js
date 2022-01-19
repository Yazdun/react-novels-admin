export const NovelTextfields = [
  {
    name: "title",
    label: "title",
    type: "text",
    id: "title",
    placeholder: "e.g. Animal's farm",
    validation: {
      required: {
        value: true,
        message: "novel's title is required",
      },
      minLength: {
        value: 3,
        message: "min length is 3 chars",
      },
      maxLength: {
        value: 50,
        message: "max length is 50 chars",
      },
    },
  },
  {
    name: "author",
    label: "author",
    type: "text",
    id: "author",
    placeholder: "e.g. George Orwell",
    validation: {
      required: {
        value: true,
        message: "novel's author is required",
      },
      minLength: {
        value: 2,
        message: "min length is 2 chars",
      },
      maxLength: {
        value: 50,
        message: "max length is 50 chars",
      },
    },
  },
  {
    name: "pages",
    label: "pages",
    type: "number",
    id: "pages",
    placeholder: "200",
    validation: {
      required: {
        value: true,
        message: "novel's pages is required",
      },
    },
  },
  {
    name: "publish",
    label: "publish",
    type: "number",
    id: "publish",
    placeholder: "2000",
    validation: {
      required: {
        value: true,
        message: "novel's publish is required",
      },
      minLength: {
        value: 4,
        message: "min length is 4 chars",
      },
      maxLength: {
        value: 4,
        message: "max length is 4 chars",
      },
    },
  },
  {
    multiline: true,
    name: "description",
    label: "description",
    type: "text",
    id: "description",
    placeholder: "e.g. some cool description",
    validation: {
      required: {
        value: true,
        message: "novel's description is required",
      },
      minLength: {
        value: 10,
        message: "min length is 10 chars",
      },
    },
  },
];
