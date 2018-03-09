package br.com.jonesradtke.app.service.mapper;

import br.com.jonesradtke.app.domain.*;
import br.com.jonesradtke.app.service.dto.LocalDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Local and its DTO LocalDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface LocalMapper extends EntityMapper<LocalDTO, Local> {



    default Local fromId(Long id) {
        if (id == null) {
            return null;
        }
        Local local = new Local();
        local.setId(id);
        return local;
    }
}
