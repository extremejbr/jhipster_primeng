package br.com.jonesradtke.app.service.dto;


import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Departamento entity.
 */
public class DepartamentoDTO implements Serializable {

    private Long id;

    private String nome;

    private String local;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        DepartamentoDTO departamentoDTO = (DepartamentoDTO) o;
        if(departamentoDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), departamentoDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DepartamentoDTO{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", local='" + getLocal() + "'" +
            "}";
    }
}
