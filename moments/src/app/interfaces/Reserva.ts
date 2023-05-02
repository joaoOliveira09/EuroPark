import { ParkingControl } from "./ParkingControl"
import { Usuario } from "./usuario"

export interface Reserva {
     id_reserva?: string
     descricaoVeiculo?: string
     dataInicial?: string
     dataFinal?: string
     valorPagamento?: number
     formaPagamento?: string
     qtdDias?: number,
     user?: Usuario,
     vaga?: ParkingControl
  }