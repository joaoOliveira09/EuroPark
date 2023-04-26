import { Usuario } from "./usuario";

export interface ParkingControl{
   id_vaga?: string,
   nomeProprietario?: string,
   numeroVaga?: number,
   valorPelaVaga?: number,
   reservadoOuNao?:boolean,
   user?: Usuario
   

}
