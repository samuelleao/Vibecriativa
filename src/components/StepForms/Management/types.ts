import { projectTypes } from '@pages/iniciarprojeto';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

export interface ManagementTypes {
    dataForms: projectTypes,
    setDataForms: any,
    register: UseFormRegister<FieldValues>
}