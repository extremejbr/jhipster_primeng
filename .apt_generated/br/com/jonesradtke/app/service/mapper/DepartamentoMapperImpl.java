package br.com.jonesradtke.app.service.mapper;

import br.com.jonesradtke.app.domain.Departamento;
import br.com.jonesradtke.app.service.dto.DepartamentoDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-03-07T16:53:12-0300",
    comments = "version: 1.2.0.Final, compiler: Eclipse JDT (IDE) 3.12.3.v20170228-1205, environment: Java 1.8.0_91 (Oracle Corporation)"
)
@Component
public class DepartamentoMapperImpl implements DepartamentoMapper {

    @Override
    public DepartamentoDTO toDto(Departamento entity) {
        if ( entity == null ) {
            return null;
        }

        DepartamentoDTO departamentoDTO = new DepartamentoDTO();

        departamentoDTO.setId( entity.getId() );
        departamentoDTO.setNome( entity.getNome() );
        departamentoDTO.setLocal( entity.getLocal() );

        return departamentoDTO;
    }

    @Override
    public List<Departamento> toEntity(List<DepartamentoDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Departamento> list = new ArrayList<Departamento>( dtoList.size() );
        for ( DepartamentoDTO departamentoDTO : dtoList ) {
            list.add( toEntity( departamentoDTO ) );
        }

        return list;
    }

    @Override
    public List<DepartamentoDTO> toDto(List<Departamento> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<DepartamentoDTO> list = new ArrayList<DepartamentoDTO>( entityList.size() );
        for ( Departamento departamento : entityList ) {
            list.add( toDto( departamento ) );
        }

        return list;
    }

    @Override
    public Departamento toEntity(DepartamentoDTO departamentoDTO) {
        if ( departamentoDTO == null ) {
            return null;
        }

        Departamento departamento = new Departamento();

        departamento.setId( departamentoDTO.getId() );
        departamento.setNome( departamentoDTO.getNome() );
        departamento.setLocal( departamentoDTO.getLocal() );

        return departamento;
    }
}
