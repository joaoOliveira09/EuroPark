// package br.csi.Parkingcontrol.service;

// import br.csi.Parkingcontrol.model.ParkingSpotModel;
// import br.csi.Parkingcontrol.repository.ParkingSpotRepository;
// import org.springframework.stereotype.Service;

// import javax.transaction.Transactional;

// import java.time.LocalDateTime;
// import java.time.format.DateTimeFormatter;
// import java.util.ArrayList;
// import java.util.Optional;
// import java.util.UUID;

// @Service
// public class ParkingSpotService {

//     final
//     ParkingSpotRepository parkingSpotRepository;

//     public ParkingSpotService(ParkingSpotRepository parkingSpotRepository) {
//         this.parkingSpotRepository = parkingSpotRepository;
//     }
// @Transactional
//     public ParkingSpotModel save(ParkingSpotModel parkingSpotModel) {
//         LocalDateTime agora = LocalDateTime.now();
//         DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
//         String dataHoraFormatada = agora.format(formatter);

//         parkingSpotModel.setRegistrationDate(dataHoraFormatada);
//         System.out.println(parkingSpotModel);
//         return parkingSpotRepository.save(parkingSpotModel);
//     }

//     public ParkingSpotModel update(ParkingSpotModel parkingSpotModel) {
//         ParkingSpotModel parkingSpotModel2 = parkingSpotRepository.getReferenceById(parkingSpotModel.getId());
//        if(!parkingSpotModel.getApartment().isEmpty())
//         parkingSpotModel2.setApartment(parkingSpotModel.getApartment());
//         if(!parkingSpotModel.getBlock().isEmpty())
//         parkingSpotModel2.setBlock(parkingSpotModel.getBlock());
//         if(!parkingSpotModel.getDescription().isEmpty())
//         parkingSpotModel2.setDescription(parkingSpotModel.getDescription());
//         if(!parkingSpotModel.getParkingSpotNumber().isEmpty())
//         parkingSpotModel2.setParkingSpotNumber(parkingSpotModel.getParkingSpotNumber());
//         if(!parkingSpotModel.getResponsibleName().isEmpty())
//         parkingSpotModel2.setResponsibleName(parkingSpotModel.getResponsibleName());
//         if(!parkingSpotModel.getImage().isEmpty())
//         parkingSpotModel2.setImage(parkingSpotModel.getImage());

//         parkingSpotRepository.flush();
//         return parkingSpotModel2;
//     }


//     public boolean existsByParkingSpotNumber(String parkingSpotNumber) {
//         return parkingSpotRepository.existsByParkingSpotNumber(parkingSpotNumber);
//     }

//     public boolean existsByApartmentAndBlock(String apartment, String block) {
//         return parkingSpotRepository.existsByApartmentAndBlock(apartment,block);
//     }

//     public ArrayList<ParkingSpotModel> findALl() {
//         return (ArrayList<ParkingSpotModel>) parkingSpotRepository.findAll();
//     }

//     public Optional<ParkingSpotModel> findById(UUID id) {
//         return parkingSpotRepository.findById(id);
//     }
//     public void delete(UUID id) {
//          parkingSpotRepository.deleteById(id);
//     }
// }
