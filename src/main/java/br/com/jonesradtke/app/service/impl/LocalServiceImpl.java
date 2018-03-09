package br.com.jonesradtke.app.service.impl;

import br.com.jonesradtke.app.service.LocalService;
import br.com.jonesradtke.app.domain.Local;
import br.com.jonesradtke.app.repository.LocalRepository;
import br.com.jonesradtke.app.service.dto.LocalDTO;
import br.com.jonesradtke.app.service.mapper.LocalMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing Local.
 */
@Service
@Transactional
public class LocalServiceImpl implements LocalService {

    private final Logger log = LoggerFactory.getLogger(LocalServiceImpl.class);

    private final LocalRepository localRepository;

    private final LocalMapper localMapper;

    public LocalServiceImpl(LocalRepository localRepository, LocalMapper localMapper) {
        this.localRepository = localRepository;
        this.localMapper = localMapper;
    }

    /**
     * Save a local.
     *
     * @param localDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public LocalDTO save(LocalDTO localDTO) {
        log.debug("Request to save Local : {}", localDTO);
        Local local = localMapper.toEntity(localDTO);
        local = localRepository.save(local);
        return localMapper.toDto(local);
    }

    /**
     * Get all the locals.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<LocalDTO> findAll() {
        log.debug("Request to get all Locals");
        return localRepository.findAll().stream()
            .map(localMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one local by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public LocalDTO findOne(Long id) {
        log.debug("Request to get Local : {}", id);
        Local local = localRepository.findOne(id);
        return localMapper.toDto(local);
    }

    /**
     * Delete the local by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Local : {}", id);
        localRepository.delete(id);
    }
}
