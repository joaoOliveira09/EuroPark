package br.csi.Parkingcontrol.service;

import java.time.temporal.Temporal;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;

import javax.transaction.Transactional;

import br.csi.Parkingcontrol.model.VagaModel;
import org.springframework.stereotype.Service;

import br.csi.Parkingcontrol.model.ReservaModel;
import br.csi.Parkingcontrol.repository.ReservaRepository;

@Service
public class ReservaService {

    private ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Transactional
    public ReservaModel save(ReservaModel reservaModel) {
        VagaModel vagaModel = new VagaModel();
        long diferencaEmMilissegundos = reservaModel.getDataFinal().getTime() - reservaModel.getDataInicial().getTime();
        // Calcula a diferença em dias
        long diferencaEmDias = TimeUnit.DAYS.convert(diferencaEmMilissegundos, TimeUnit.MILLISECONDS);
        System.out.println(diferencaEmDias);
        reservaModel.setQtdDias((int) diferencaEmDias);
        if(vagaModel.getValorPelaVaga() != null){
            reservaModel.setValorPagamento(diferencaEmDias * vagaModel.getValorPelaVaga());
        }
        System.out.println(reservaModel.getVaga().getReservadoOuNao());
        return reservaRepository.save(reservaModel);
    }

    
    
    public ArrayList<ReservaModel> findAll() {
        return (ArrayList<ReservaModel>) reservaRepository.findAll();
    }

    public Optional<ReservaModel> findById(UUID id) {
        return reservaRepository.findById(id);
    }

    public void delete(UUID id) {
        reservaRepository.deleteById(id);
    }

    public ReservaModel update(UUID id, ReservaModel reservaModel) {
        ReservaModel reservaModel2 = reservaRepository.getReferenceById(id);

        reservaModel2.setDataFinal(reservaModel.getDataFinal());
        reservaModel2.setDataInicial(reservaModel.getDataInicial());
        reservaModel2.setDescricaoVeiculo(reservaModel.getDescricaoVeiculo());
        reservaModel2.setValorPagamento(reservaModel.getValorPagamento());
        reservaModel2.setUser(reservaModel.getUser());
        reservaModel2.setVaga(reservaModel.getVaga());
        reservaModel2.setFormaPagamento(reservaModel.getFormaPagamento());
        reservaModel2.setQtdDias(reservaModel.getQtdDias());
//        if (!vagaModel.getNumeroVaga() == 0);
//            vagaModel2.setNumeroVaga(vagaModel.getNumeroVaga());
//        if (!vagaModel.getValorPelaVaga().isEmpty())
//            vagaModel2.setValorPelaVaga(vagaModel.getValorPelaVaga());

//        if (!vagaModel.getParkingSpotNumber().isEmpty())
//            vagaModel2.setParkingSpotNumber(vagaModel.getParkingSpotNumber());
//        if (!vagaModel.getResponsibleName().isEmpty())
//            vagaModel2.setResponsibleName(vagaModel.getResponsibleName());
//        if (!vagaModel.getImage().isEmpty())
//            vagaModel2.setImage(vagaModel.getImage());

        reservaRepository.flush();
        return reservaModel2;
    }
    
}
