package br.csi.Parkingcontrol.controller;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import br.csi.Parkingcontrol.model.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.csi.Parkingcontrol.model.VagaModel;
import br.csi.Parkingcontrol.service.VagaService;

@RestController
// @CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/parking-spot")
public class VagaController {
    private VagaService vagaService;

    public VagaController(VagaService vagaService) {
        this.vagaService = vagaService;
    }

    @PostMapping
    public ResponseEntity<Object> saveVaga(@RequestBody VagaModel vagaModel) {
        System.out.println(vagaModel);
//         if(vagaService.(vagaModel.getNumeroVaga())){
//         return ResponseEntity.status(HttpStatus.CONFLICT).body("Vaga já em uso");
//         }

        return ResponseEntity.status(HttpStatus.OK).body(vagaService.save(vagaModel));
    }

    @GetMapping()
    public ArrayList<VagaModel> getVagas() {
        return this.vagaService.findAll();
    }

    @GetMapping("/{id}")
    public VagaModel getVaga(@PathVariable("id") UUID id) {return this.vagaService.findById(id);}


    @DeleteMapping("/{id}")
    public void deleteVaga(@PathVariable(value = "id") UUID id) {

        this.vagaService.delete(id);
    }


    @PatchMapping("/{id}")
    public void updateVaga(@PathVariable("id") UUID id, @RequestBody VagaModel vagaModel) {

        this.vagaService.update(id, vagaModel);
        System.out.println("print"+vagaModel);
    }
//    @PutMapping("/{id}")
//    public void update(@PathVariable("id") UUID id, @RequestBody UserModel user) {
//        this.userService.update(id, user);
//    }
//
}
