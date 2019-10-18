package com.all.ekki.Controller;


import com.all.ekki.Model.Usuario;
import com.all.ekki.Repository.UsuarioRepository;
import com.all.ekki.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/usuario")
public class UsuarioController {

    private UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @GetMapping("/id/{idUsuario}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long idUsuario){


        return ResponseEntity.ok(usuarioService.getUsuarioById(idUsuario));
    }

    @GetMapping("/nome/{nomeUsuario}")
    public ResponseEntity<List<Usuario>> getUsuarioById(@PathVariable String nomeUsuario){


        return ResponseEntity.ok(usuarioService.getUsuariobyNome(nomeUsuario));
    }

}
