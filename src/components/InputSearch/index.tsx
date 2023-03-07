import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { StyledInputSearch } from "./style"

//Preciso saber se isto estará no contexto ou aqui mesmo
interface IInputFormData{
    inputValue: string;
}

interface IInputSearchProps{
    placeholder: string;
}

export const InputSearch = ({placeholder} : IInputSearchProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm<IInputFormData>();
    const printSearch = (data: IInputFormData) => console.log(`Busca: ${data.inputValue}`)

    const submitFunction = (data: IInputFormData) => {
        printSearch(data)
    }

    return (
        <StyledInputSearch onSubmit={handleSubmit(submitFunction)}>
            <input type="text" {...register('inputValue')}/>
            <button type="submit">Lupa</button>

        </StyledInputSearch>
    )
}