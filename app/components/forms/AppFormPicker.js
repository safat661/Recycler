import React from "react";
import { useFormikContext } from "formik";

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ 
  items, 
  name,
  numberofColumns, 
  PickerItemComponent, 
  placeholder, 
  width 
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberofColumns ={numberofColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponenet = { PickerItemComponent }
        placeholder={placeholder}
        selectedItem={values[name]}
        width = {width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
