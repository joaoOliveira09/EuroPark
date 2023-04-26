// package br.csi.Parkingcontrol.model;

// import javax.persistence.*;
// import java.io.Serializable;
// import java.util.UUID;

// @Entity
// @Table(name = "TB_PARKING_SPOT")
// public class ParkingSpotModel implements Serializable {
//    private static final long serialVersionUID = 1L;

//    @Id
//     @GeneratedValue(strategy = GenerationType.AUTO)
//     private UUID id;
//    @Column(nullable = false, unique = true, length = 10)
//     private String parkingSpotNumber;
//     @Column(nullable = false, length = 200)
//     private String description;
//     @Column(nullable = false)
//     private String registrationDate;
//     @Column(nullable = false, length = 130)
//     private String responsibleName;
//     @Column(nullable = false, length = 30)
//     private String apartment;
//     @Column(nullable = false, length = 30)
//     private String block;
//     @Column(nullable = true)
//     private String image;

//     public UUID getId() {
//         return id;
//     }

//     public void setId(UUID id) {
//         this.id = id;
//     }

//     public String getParkingSpotNumber() {
//         return parkingSpotNumber;
//     }

//     public void setParkingSpotNumber(String parkingSpotNumber) {
//         this.parkingSpotNumber = parkingSpotNumber;
//     }


//     public String getDescription() {
//         return description;
//     }

//     public void setDescription(String description) {
//         this.description = description;
//     }

//    public String getRegistrationDate() {
//        return registrationDate;
//     }

//    public void setRegistrationDate(String registrationDate) {
//         this.registrationDate = registrationDate;
//     }

//     public String getResponsibleName() {
//         return responsibleName;
//     }

//     public void setResponsibleName(String responsibleName) {
//         this.responsibleName = responsibleName;
//     }

//     public String getApartment() {
//         return apartment;
//     }

//     public void setApartment(String apartment) {
//         this.apartment = apartment;
//     }

//     public String getBlock() {
//         return block;
//     }

//     public void setBlock(String block) {
//         this.block = block;
//     }

//     public String getImage() {
//         return image;
//     }

//     public void setImage(String image) {
//         this.image = image;
//     }

    
// }
