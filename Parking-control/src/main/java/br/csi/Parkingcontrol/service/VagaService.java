package br.csi.Parkingcontrol.service;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

// import java.time.LocalDateTime;
// import java.time.format.DateTimeFormatter;

import javax.transaction.Transactional;

import br.csi.Parkingcontrol.model.UserModel;
import org.springframework.stereotype.Service;

import br.csi.Parkingcontrol.model.VagaModel;
import br.csi.Parkingcontrol.repository.VagaRepository;

@Service
public class VagaService {
    private VagaRepository vagaRepository;

    public VagaService(VagaRepository vagaRepository) {
        this.vagaRepository = vagaRepository;
    }

    @Transactional
    public VagaModel save(VagaModel vagaModel) {
        // LocalDateTime agora = LocalDateTime.now();
        // DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy
        // HH:mm:ss");
        // String dataHoraFormatada = agora.format(formatter);

        // vagaModel.setRegistrationDate(dataHoraFormatada);
        System.out.println(vagaModel);
        return vagaRepository.save(vagaModel);
    }

    public ArrayList<VagaModel> findAll() {
        return (ArrayList<VagaModel>) vagaRepository.findAll();
    }

    public VagaModel findById(UUID id) {
        VagaModel vaga = new VagaModel();
        vaga = this.vagaRepository.findById(id).get();
        return vaga;
    }

    public VagaModel update(UUID id, VagaModel vagaModel) {
        VagaModel vagaModel2 = vagaRepository.getReferenceById(id);
        //   if (!vagaModel.getNomeProprietario().isEmpty())
              vagaModel2.setNomeProprietario(vagaModel.getNomeProprietario());
              vagaModel2.setNumeroVaga(vagaModel.getNumeroVaga());
              vagaModel2.setReservadoOuNao(vagaModel.getReservadoOuNao());
              vagaModel2.setValorPelaVaga(vagaModel.getValorPelaVaga());
              vagaModel2.setUser(vagaModel.getUser());
//              vagaModel2.setUser(vagaModel.getUser());
//        if (!vagaModel.getNumeroVaga() == 0);
//           vagaModel2.setNumeroVaga(vagaModel.getNumeroVaga());
//        if (!vagaModel.getValorPelaVaga().isEmpty())
//            vagaModel2.setValorPelaVaga(vagaModel.getValorPelaVaga());

//        if (!vagaModel.getParkingSpotNumber().isEmpty())
//            vagaModel2.setParkingSpotNumber(vagaModel.getParkingSpotNumber());
//        if (!vagaModel.getResponsibleName().isEmpty())
//            vagaModel2.setResponsibleName(vagaModel.getResponsibleName());
//        if (!vagaModel.getImage().isEmpty())
//            vagaModel2.setImage(vagaModel.getImage());

        vagaRepository.flush();
        return vagaModel2;
    }

    public void delete(UUID id) {
        vagaRepository.deleteById(id);
    }

    // public boolean existsByParkingSpotNumber(int parkingSpotNumber) {
    //     return vagaRepository.existsByParkingSpotNumber(parkingSpotNumber);
    // }

}
