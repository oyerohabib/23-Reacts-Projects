import { Grid } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { Controls } from '../../components/controls/Controls'
import { Form, useForm } from '../../components/useForm'
import * as employeeService from '../../services/employeeService'

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
]

const initialValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false
}

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props

  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required"
    if('email' in fieldValues)
      temp.email = (/$^|.+@.+\..+/).test(fieldValues.email) ? "" : "Email is not valid"
    if('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum length is 10"
    if('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required"
    setErrors({...temp})
    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }

  const {values, setValues, resetForm, errors, setErrors, handleInputChange} = useForm(initialValues, true, validate)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  }

  useEffect(() => {
      if (recordForEdit != null)
          setValues({
              ...recordForEdit
          })
  }, [recordForEdit, setValues])

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            value={values.fullName}
            label="Full name"
            error={errors.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            error={errors.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Mobile"
            value={values.mobile}
            name="mobile"
            error={errors.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="City"
            value={values.city}
            name="city"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
          name="gender"
          value={values.gender}
          onChange={handleInputChange}
          label="Gender"
          items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            error={errors.departmentId}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Date Picker"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange} 
          />
            <div>
              <Controls.Button
                type="submit"
                text="Submit" />
              <Controls.Button
                color="default"
                onClick={resetForm}
                text="Reset" />
            </div>
        </Grid>
      </Grid>
    </Form>
  )
}
