package br.com.jonesradtke.app.service.mapper;

import br.com.jonesradtke.app.domain.Departamento;
import br.com.jonesradtke.app.domain.Item;
import br.com.jonesradtke.app.service.dto.ItemDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-03-07T16:53:12-0300",
    comments = "version: 1.2.0.Final, compiler: Eclipse JDT (IDE) 3.12.3.v20170228-1205, environment: Java 1.8.0_91 (Oracle Corporation)"
)
@Component
public class ItemMapperImpl implements ItemMapper {

    @Autowired
    private DepartamentoMapper departamentoMapper;

    @Override
    public List<Item> toEntity(List<ItemDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Item> list = new ArrayList<Item>( dtoList.size() );
        for ( ItemDTO itemDTO : dtoList ) {
            list.add( toEntity( itemDTO ) );
        }

        return list;
    }

    @Override
    public List<ItemDTO> toDto(List<Item> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ItemDTO> list = new ArrayList<ItemDTO>( entityList.size() );
        for ( Item item : entityList ) {
            list.add( toDto( item ) );
        }

        return list;
    }

    @Override
    public ItemDTO toDto(Item item) {
        if ( item == null ) {
            return null;
        }

        ItemDTO itemDTO = new ItemDTO();

        Long id = itemDepartamentoId( item );
        if ( id != null ) {
            itemDTO.setDepartamentoId( id );
        }
        itemDTO.setId( item.getId() );
        itemDTO.setEtiqueta( item.getEtiqueta() );
        itemDTO.setDescricao( item.getDescricao() );
        itemDTO.setDataAquisicao( item.getDataAquisicao() );

        return itemDTO;
    }

    @Override
    public Item toEntity(ItemDTO itemDTO) {
        if ( itemDTO == null ) {
            return null;
        }

        Item item = new Item();

        item.setDepartamento( departamentoMapper.fromId( itemDTO.getDepartamentoId() ) );
        item.setId( itemDTO.getId() );
        item.setEtiqueta( itemDTO.getEtiqueta() );
        item.setDescricao( itemDTO.getDescricao() );
        item.setDataAquisicao( itemDTO.getDataAquisicao() );

        return item;
    }

    private Long itemDepartamentoId(Item item) {
        if ( item == null ) {
            return null;
        }
        Departamento departamento = item.getDepartamento();
        if ( departamento == null ) {
            return null;
        }
        Long id = departamento.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
