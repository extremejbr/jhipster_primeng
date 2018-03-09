package br.com.jonesradtke.app.service.dto;


import java.time.LocalDate;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Item entity.
 */
public class ItemDTO implements Serializable {

    private Long id;

    private String etiqueta;

    private String descricao;

    private LocalDate dataAquisicao;

    private Long departamentoId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEtiqueta() {
        return etiqueta;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getDataAquisicao() {
        return dataAquisicao;
    }

    public void setDataAquisicao(LocalDate dataAquisicao) {
        this.dataAquisicao = dataAquisicao;
    }

    public Long getDepartamentoId() {
        return departamentoId;
    }

    public void setDepartamentoId(Long departamentoId) {
        this.departamentoId = departamentoId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ItemDTO itemDTO = (ItemDTO) o;
        if(itemDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), itemDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ItemDTO{" +
            "id=" + getId() +
            ", etiqueta='" + getEtiqueta() + "'" +
            ", descricao='" + getDescricao() + "'" +
            ", dataAquisicao='" + getDataAquisicao() + "'" +
            "}";
    }
}
