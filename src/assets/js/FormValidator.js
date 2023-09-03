class Validator{
    constructor(){
        this.valid = true
    };
    validate(form){
        const fields_keys = Object.keys(form)
        for (let field_name of fields_keys){
            const field = form[field_name]
            const field_value = field.value
            const validators = field.validators
            
            //Reset error messages
            field.validators

            field.errors = []
            for (let validationObj of validators){
                if (validationObj.validationType == 'dataRequired'){
                    let validatorInstance = this.dataRequired
                    let fieldValidator = validatorInstance(field_value)
                    if (!fieldValidator.is_valid){
                        //Add error message
                        field.errors.push(fieldValidator.message)
                        this.valid = false
                    }
                }
                else if(validationObj.validationType == 'minLength'){
                    let validatorInstance = this.minLength
                    let fieldValidator = validatorInstance(field_value, validationObj.payload)
                    if (!fieldValidator.is_valid){
                        //Add error message
                        field.errors.push(fieldValidator.message)
                        this.valid = false
                    }
                }
                
                
            }
        }
        console.log(this.valid)
        return {is_valid: this.valid, form}
    }
    dataRequired(value){
        if (value){
            return {is_valid: true, message: ''}
        }
        return {is_valid: false, message: 'Field cannot be empty'}
    }
    minLength(value, payload){
        if (value.length >= payload){
            return {is_valid: true, message: ''}
        }
        return {is_valid: false, message: `Field must not be less than ${payload} characters`}
    }
}
export default Validator