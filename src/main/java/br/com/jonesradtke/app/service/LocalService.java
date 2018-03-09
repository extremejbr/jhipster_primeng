package br.com.jonesradtke.app.service;

import br.com.jonesradtke.app.service.dto.LocalDTO;
import java.util.List;

/**
 * Service Interface for managing Local.
 */
public interface LocalService {

    /**
     * Save a local.
     *
     * @param localDTO the entity to save
     * @return the persisted entity
     */
    LocalDTO save(LocalDTO localDTO);

    /**
     * Get all the locals.
     *
     * @return the list of entities
     */
    List<LocalDTO> findAll();

    /**
     * Get the "id" local.
     *
     * @param id the id of the entity
     * @return the entity
     */
    LocalDTO findOne(Long id);

    /**
     * Delete the "id" local.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
