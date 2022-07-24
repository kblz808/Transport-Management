export interface Transporter {
    id: number;
    code: string;
    name: string;
    address: string;
    contact_phone: string;
}

export const EMPTY_TRANSPORTER: Transporter = {
    id: 0,
    code: '',
    name: '',
    address: '',
    contact_phone: ''
}