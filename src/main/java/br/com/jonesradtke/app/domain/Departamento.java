package br.com.jonesradtke.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Departamento.
 */
@Entity
@Table(name = "departamento")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Departamento implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "jhi_local")
    private String local;

    @OneToMany(mappedBy = "departamento")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Item> ids = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public Departamento nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLocal() {
        return local;
    }

    public Departamento local(String local) {
        this.local = local;
        return this;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public Set<Item> getIds() {
        return ids;
    }

    public Departamento ids(Set<Item> items) {
        this.ids = items;
        return this;
    }

    public Departamento addId(Item item) {
        this.ids.add(item);
        item.setDepartamento(this);
        return this;
    }

    public Departamento removeId(Item item) {
        this.ids.remove(item);
        item.setDepartamento(null);
        return this;
    }

    public void setIds(Set<Item> items) {
        this.ids = items;
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
        Departamento departamento = (Departamento) o;
        if (departamento.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), departamento.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Departamento{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", local='" + getLocal() + "'" +
            "}";
    }
}
