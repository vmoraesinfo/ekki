package com.all.ekki.Service;

import com.all.ekki.Model.Usuario;
import com.all.ekki.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario getUsuarioById(Long id){
        Usuario usuario =usuarioRepository.findById(id).get();
        return usuario;
    }

    public List<Usuario> getUsuariobyNome(String nome){
        List<Usuario> usuarios =usuarioRepository.findByNome(nome);
        return usuarios;
    }
}
