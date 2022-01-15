export const AuthorTextfields = [
  {
    name: "name",
    label: "name",
    type: "text",
    id: "name",
    placeholder: "e.g. George Orwell",
    validation: {
      required: {
        value: true,
        message: "author's name is required",
      },
    },
  },
  {
    name: "birth",
    label: "birth",
    type: "date",
    id: "birth",
    placeholder: "2022/1/1",
    validation: {
      required: {
        value: true,
        message: "author's birth is required",
      },
    },
  },
  {
    name: "death",
    label: "death",
    type: "date",
    id: "death",
    placeholder: "2022/1/1",
    validation: {},
  },
  {
    name: "nationality",
    label: "nationality",
    type: "text",
    id: "nationality",
    placeholder: "e.g. USA",
    validation: {
      required: {
        value: true,
        message: "author's nationality is required",
      },
      minLength: {
        value: 2,
        message: "min length is 2 chars",
      },
    },
  },

  {
    multiline: true,
    name: "bio",
    label: "bio",
    type: "text",
    id: "bio",
    placeholder: "e.g. some cool bio",
    validation: {
      required: {
        value: true,
        message: "author's bio is required",
      },
      minLength: {
        value: 2,
        message: "min length is 2 chars",
      },
    },
  },
];
