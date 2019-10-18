package com.all.ekki.Model;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "usuario")

public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUsuario;
    private String cpf;
    private String nome;
    private String telefone;
    @OneToOne
    @JoinColumn(name = "idConta")
    private Conta conta;

}
