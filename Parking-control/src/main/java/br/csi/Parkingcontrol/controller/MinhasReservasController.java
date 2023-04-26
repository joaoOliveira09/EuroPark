package br.csi.Parkingcontrol.controller;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.csi.Parkingcontrol.model.ReservaModel;
import br.csi.Parkingcontrol.service.MinhasReservasService;

@RestController
@RequestMapping("/minhaReserva")
public class MinhasReservasController {

    private MinhasReservasService minhasReservasService;

    public MinhasReservasController(MinhasReservasService minhasReservasService) {
        this.minhasReservasService = minhasReservasService;
    }  

    @GetMapping("/{id}")
    public ArrayList<ReservaModel> getReservasDoUsuario(@PathVariable(value = "id")UUID id){
        //ArrayList<ReservaModel> parkingSpotModelOptional = minhasReservasService.getReservasDoUsuario(id);
        // if(!parkingSpotModelOptional.isPresent()){
        //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Reserva não encontrada");
        // }
        return this.minhasReservasService.getReservasDoUsuario(id);
    }
    
}
