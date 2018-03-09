package br.com.jonesradtke.app.service.mapper;

import br.com.jonesradtke.app.domain.*;
import br.com.jonesradtke.app.service.dto.ItemDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Item and its DTO ItemDTO.
 */
@Mapper(componentModel = "spring", uses = {DepartamentoMapper.class})
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {

    @Mapping(source = "departamento.id", target = "departamentoId")
    ItemDTO toDto(Item item);

    @Mapping(source = "departamentoId", target = "departamento")
    Item toEntity(ItemDTO itemDTO);

    default Item fromId(Long id) {
        if (id == null) {
            return null;
        }
        Item item = new Item();
        item.setId(id);
        return item;
    }
}
