package br.com.jonesradtke.app.service.mapper;

import br.com.jonesradtke.app.domain.Local;
import br.com.jonesradtke.app.service.dto.LocalDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-03-07T16:53:11-0300",
    comments = "version: 1.2.0.Final, compiler: Eclipse JDT (IDE) 3.12.3.v20170228-1205, environment: Java 1.8.0_91 (Oracle Corporation)"
)
@Component
public class LocalMapperImpl implements LocalMapper {

    @Override
    public Local toEntity(LocalDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Local local = new Local();

        local.setId( dto.getId() );
        local.setNome( dto.getNome() );

        return local;
    }

    @Override
    public LocalDTO toDto(Local entity) {
        if ( entity == null ) {
            return null;
        }

        LocalDTO localDTO = new LocalDTO();

        localDTO.setId( entity.getId() );
        localDTO.setNome( entity.getNome() );

        return localDTO;
    }

    @Override
    public List<Local> toEntity(List<LocalDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Local> list = new ArrayList<Local>( dtoList.size() );
        for ( LocalDTO localDTO : dtoList ) {
            list.add( toEntity( localDTO ) );
        }

        return list;
    }

    @Override
    public List<LocalDTO> toDto(List<Local> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<LocalDTO> list = new ArrayList<LocalDTO>( entityList.size() );
        for ( Local local : entityList ) {
            list.add( toDto( local ) );
        }

        return list;
    }
}
