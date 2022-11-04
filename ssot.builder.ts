export const projectName = 'Builder';
export const projectDescription = 'SSOT Application';

export const entities = {
  project: {
    columns: {
      name: {
        type: 'string',
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
  },
};
