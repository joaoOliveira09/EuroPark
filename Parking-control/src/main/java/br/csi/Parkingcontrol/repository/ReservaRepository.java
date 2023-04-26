package br.csi.Parkingcontrol.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.csi.Parkingcontrol.model.ReservaModel;

@Repository
public interface ReservaRepository extends JpaRepository<ReservaModel, UUID>{

    @Query(value = "SELECT * FROM tb_reserva r WHERE r.id_user = :id ", nativeQuery = true)
    public ArrayList<ReservaModel> getReservasDoUsuario(@Param("id") UUID id);
    
}
