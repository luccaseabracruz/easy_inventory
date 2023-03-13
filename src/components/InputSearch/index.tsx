import { useForm } from "react-hook-form";
import { StyledInputSearch } from "./style"
import { BiSearch } from 'react-icons/bi'
import { useContext } from "react";
import { ProductsContext } from "../../provides/ProductsContext";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ISerchData } from "./types";
 


interface IInputSearchProps{
    placeholder: string;
}

const schema = yup.object({
    inputValue: yup.string().required('É necessário digitar algo')
})

export const InputSearch = ({placeholder} : IInputSearchProps) => {

    const {searchProduct} = useContext(ProductsContext)

    const {register, handleSubmit, formState: {errors}} = useForm<ISerchData>({
        resolver: yupResolver(schema)
    });

    const submitFunction = (data: ISerchData) => {
        searchProduct(data);
        console.log(errors)
    }

    return (
        <>
            <StyledInputSearch onSubmit={handleSubmit(submitFunction)}>
                <div className="inputContainer">
                    <input type="text" placeholder={placeholder} {...register('inputValue')}/>
                    <button type="submit"> <BiSearch /> </button>
                </div>
                <small>{errors.inputValue?.message}</small>
            </StyledInputSearch>
        </>
    )
}