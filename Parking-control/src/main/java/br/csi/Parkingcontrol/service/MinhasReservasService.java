package br.csi.Parkingcontrol.service;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.csi.Parkingcontrol.model.ReservaModel;
import br.csi.Parkingcontrol.repository.MinhasReservasRepository;
import br.csi.Parkingcontrol.repository.ReservaRepository;

@Service
public class MinhasReservasService {

    private ReservaRepository reservaRepository;

    public MinhasReservasService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Transactional
    public ArrayList<ReservaModel> getReservasDoUsuario(UUID id) {
        return reservaRepository.getReservasDoUsuario(id);
    }
    
}
