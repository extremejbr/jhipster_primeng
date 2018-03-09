package br.com.jonesradtke.app.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Item.
 */
@Entity
@Table(name = "item")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Item implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "etiqueta")
    private String etiqueta;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "data_aquisicao")
    private LocalDate dataAquisicao;

    @ManyToOne
    private Departamento departamento;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEtiqueta() {
        return etiqueta;
    }

    public Item etiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
        return this;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    public String getDescricao() {
        return descricao;
    }

    public Item descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getDataAquisicao() {
        return dataAquisicao;
    }

    public Item dataAquisicao(LocalDate dataAquisicao) {
        this.dataAquisicao = dataAquisicao;
        return this;
    }

    public void setDataAquisicao(LocalDate dataAquisicao) {
        this.dataAquisicao = dataAquisicao;
    }

    public Departamento getDepartamento() {
        return departamento;
    }

    public Item departamento(Departamento departamento) {
        this.departamento = departamento;
        return this;
    }

    public void setDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Item item = (Item) o;
        if (item.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), item.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Item{" +
            "id=" + getId() +
            ", etiqueta='" + getEtiqueta() + "'" +
            ", descricao='" + getDescricao() + "'" +
            ", dataAquisicao='" + getDataAquisicao() + "'" +
            "}";
    }
}
