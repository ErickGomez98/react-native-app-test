export type TipoMensaje = "Out" | "In"

export interface Mensaje {
    id: number,
    timestamp: number,
    user: User,
    mensaje: string,
    type: TipoMensaje

}

export interface User {
    id: number,
    nombre: string,
    imagen: string
}
