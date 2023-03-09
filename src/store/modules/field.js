const field = {
  state: {
    formFields: {},
    fieldsArray: [],
    checkedField: {},
  },
  mutations: {
    // SET_FIELD_ARRAY(state, value) {
    //   state.fieldsArray = value;
    // },
    // SET_FORM_FIELDS(state, value) {
    //   state.formFields = value;
    //   state.fieldsArray = Object.values(state.formFields);
    // },
    // ADD_FORM_FIELD(state, value) {
    //   state.formFields[value.uuid] = value;
    //   state.fieldsArray = Object.values(state.formFields);
    // },
    // COPY_FORM_FIELD(state, value) {
    //   state.formFields[value.uuid] = value;
    //   state.fieldsArray = Object.values(state.formFields);
    // },
    // DELETE_FORM_FIELD(state, value) {
    //   delete state.formFields[value.uuid];
    //   state.fieldsArray = Object.values(state.formFields);
    //   if (state.checkedField.uuid === value.uuid) {
    //     state.checkedField = {};
    //   }
    // },
    // SET_CHECKED_FIELD(state, value) {
    //   state.checkedField = value;
    // },
    // SET_CHECKED_INDEX(state, value) {
    //   state.checkedIndex = value;
    // }
  }
};

export default field;
