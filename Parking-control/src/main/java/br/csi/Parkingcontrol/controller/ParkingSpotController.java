// package br.csi.Parkingcontrol.controller;

// import br.csi.Parkingcontrol.dtos.ParkingSpotDto;
// import br.csi.Parkingcontrol.model.ParkingSpotModel;
// import br.csi.Parkingcontrol.service.ParkingSpotService;
// import org.springframework.beans.BeanUtils;
// import org.springframework.http.HttpStatus;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import javax.validation.Valid;
// import java.util.ArrayList;
// import java.util.Optional;
// import java.util.UUID;

// @RestController
// @CrossOrigin(origins = "*", maxAge = 3600)
// @RequestMapping("/parking-spot")
// public class ParkingSpotController {


//     final ParkingSpotService parkingSpotService;


//     public ParkingSpotController(ParkingSpotService parkingSpotService) {
//         this.parkingSpotService = parkingSpotService;
//     }

//     @PostMapping
//     public ResponseEntity<Object> saveParkingSpot(@RequestBody  ParkingSpotDto parkingSpotDto){
// System.out.println(parkingSpotDto);
//         if(parkingSpotService.existsByParkingSpotNumber(parkingSpotDto.getParkingSpotNumber())){
//             return ResponseEntity.status(HttpStatus.CONFLICT).body("Vaga já em uso");
//         }
//         if(parkingSpotService.existsByApartmentAndBlock(parkingSpotDto.getApartment(), parkingSpotDto.getBlock())){
//             return ResponseEntity.status(HttpStatus.CONFLICT).body("Bloco e apartamento já registrados");
//         }


//         ParkingSpotModel parkingSpotModel = new ParkingSpotModel();
//         BeanUtils.copyProperties(parkingSpotDto, parkingSpotModel);
//         //parkingSpotModel.setRegistrationDate(LocalDateTime.now(ZoneId.of("UTC")));
//         return ResponseEntity.status(HttpStatus.OK).body(parkingSpotService.save(parkingSpotModel));
//     }
    
//     @GetMapping()
//     public ArrayList<ParkingSpotModel> getParkingSpotModels() {
//         return this.parkingSpotService.findALl();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Object> getOneParkingSpot(@PathVariable(value = "id")UUID id){
//         Optional<ParkingSpotModel> parkingSpotModelOptional = parkingSpotService.findById(id);
//         if(!parkingSpotModelOptional.isPresent()){
//             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vaga não encontrada");
//         }
//         return ResponseEntity.status(HttpStatus.OK).body(parkingSpotModelOptional.get());
//     }

//     @DeleteMapping("/{id}")
//     public void deleteParkingSpot(@PathVariable(value = "id")UUID id){
        
//         parkingSpotService.delete(id);
//         //return ResponseEntity.status(HttpStatus.OK).body("Vaga deletada com sucesso");
//     }

//     @PatchMapping("{id}")
// public  ResponseEntity<Object> updateParkingSpot(@PathVariable(value = "id")UUID id,
//                                                  @RequestBody @Valid ParkingSpotDto parkingSpotDto){
//         Optional<ParkingSpotModel> parkingSpotModelOptional = parkingSpotService.findById(id);
//         if(!parkingSpotModelOptional.isPresent()){
//             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vaga não encontrada");
//         }
//         var parkingSpotModel = new ParkingSpotModel();// seta só os dois que são fixos data e id
//         BeanUtils.copyProperties(parkingSpotDto,parkingSpotModel);
//         parkingSpotModel.setId(parkingSpotModelOptional.get().getId());
//         parkingSpotModel.setRegistrationDate(parkingSpotModelOptional.get().getRegistrationDate());

//         return ResponseEntity.status(HttpStatus.OK).body(parkingSpotService.update(parkingSpotModel));
//     }
// }
