package br.csi.Parkingcontrol.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_user")
public class UserModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user")
    private UUID userId;
    @NotBlank
    @Column(nullable = false, name = "username")
    private String username;
    @Column(nullable = false, name = "numeroApartamento")
    private Integer numeroApartamento;
    @NotBlank
    @Column(nullable = false, name = "Bloco")
    private String Bloco;
    @NotBlank
    @Column(nullable = false, name = "senha")
    private String senha;
    @NotBlank
    @Column(nullable = false, name = "permissao")
    private String permissao;
    @Transient
    private String token;
    //  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    //  private List<VagaModel> orders = new ArrayList<>();
}
