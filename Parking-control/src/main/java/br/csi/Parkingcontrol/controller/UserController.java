package br.csi.Parkingcontrol.controller;

import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
import java.util.ArrayList;
import java.util.UUID;

import br.csi.Parkingcontrol.model.UserModel;
import br.csi.Parkingcontrol.service.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
 
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public UserModel getUser(@PathVariable("id") UUID id) {
        return this.userService.getUser(id);
    }

    @GetMapping()
    public ArrayList<UserModel> getUsers() {
        return this.userService.getUsers();
    }

   // @GetMapping("/img/{imgName}")
   // public ResponseEntity<byte[]> getImg(@PathVariable("imgName") Optional<String> imgName) {
      //  return this.userService.getImgFs(imgName);
   // }

    @PostMapping()
    public UserModel create(@Valid @RequestBody UserModel usuario) {
        return this.userService.save(usuario);
       
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id) {
        this.userService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable("id") UUID id, @RequestBody UserModel user) {
        this.userService.update(id, user);
    }
    
}