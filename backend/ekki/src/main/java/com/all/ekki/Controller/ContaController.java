package com.all.ekki.Controller;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/conta")
public class ContaController {

    @GetMapping("/saldo/usuario/{idUsuario}")
    public float getSaldoByUser(@PathVariable Long idUsuario){


        return 0;
    }

    @GetMapping("/saldo")
    public ResponseEntity getSaldo(){


        return ResponseEntity.ok(500);
    }
}
