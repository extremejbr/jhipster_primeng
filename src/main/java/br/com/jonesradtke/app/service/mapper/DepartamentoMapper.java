package br.com.jonesradtke.app.service.mapper;

import br.com.jonesradtke.app.domain.*;
import br.com.jonesradtke.app.service.dto.DepartamentoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Departamento and its DTO DepartamentoDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DepartamentoMapper extends EntityMapper<DepartamentoDTO, Departamento> {


    @Mapping(target = "ids", ignore = true)
    Departamento toEntity(DepartamentoDTO departamentoDTO);

    default Departamento fromId(Long id) {
        if (id == null) {
            return null;
        }
        Departamento departamento = new Departamento();
        departamento.setId(id);
        return departamento;
    }
}
