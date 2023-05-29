import { projectTypes } from '@pages/iniciarprojeto';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

export interface AboutProjectTypes {
    dataForms: projectTypes,
    setDataForms: any,
    register: UseFormRegister<FieldValues>
}