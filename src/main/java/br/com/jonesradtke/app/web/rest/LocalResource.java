package br.com.jonesradtke.app.web.rest;

import com.codahale.metrics.annotation.Timed;
import br.com.jonesradtke.app.service.LocalService;
import br.com.jonesradtke.app.web.rest.errors.BadRequestAlertException;
import br.com.jonesradtke.app.web.rest.util.HeaderUtil;
import br.com.jonesradtke.app.service.dto.LocalDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Local.
 */
@RestController
@RequestMapping("/api")
public class LocalResource {

    private final Logger log = LoggerFactory.getLogger(LocalResource.class);

    private static final String ENTITY_NAME = "local";

    private final LocalService localService;

    public LocalResource(LocalService localService) {
        this.localService = localService;
    }

    /**
     * POST  /locals : Create a new local.
     *
     * @param localDTO the localDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new localDTO, or with status 400 (Bad Request) if the local has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/locals")
    @Timed
    public ResponseEntity<LocalDTO> createLocal(@RequestBody LocalDTO localDTO) throws URISyntaxException {
        log.debug("REST request to save Local : {}", localDTO);
        if (localDTO.getId() != null) {
            throw new BadRequestAlertException("A new local cannot already have an ID", ENTITY_NAME, "idexists");
        }
        LocalDTO result = localService.save(localDTO);
        return ResponseEntity.created(new URI("/api/locals/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /locals : Updates an existing local.
     *
     * @param localDTO the localDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated localDTO,
     * or with status 400 (Bad Request) if the localDTO is not valid,
     * or with status 500 (Internal Server Error) if the localDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/locals")
    @Timed
    public ResponseEntity<LocalDTO> updateLocal(@RequestBody LocalDTO localDTO) throws URISyntaxException {
        log.debug("REST request to update Local : {}", localDTO);
        if (localDTO.getId() == null) {
            return createLocal(localDTO);
        }
        LocalDTO result = localService.save(localDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, localDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /locals : get all the locals.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of locals in body
     */
    @GetMapping("/locals")
    @Timed
    public List<LocalDTO> getAllLocals() {
        log.debug("REST request to get all Locals");
        return localService.findAll();
        }

    /**
     * GET  /locals/:id : get the "id" local.
     *
     * @param id the id of the localDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the localDTO, or with status 404 (Not Found)
     */
    @GetMapping("/locals/{id}")
    @Timed
    public ResponseEntity<LocalDTO> getLocal(@PathVariable Long id) {
        log.debug("REST request to get Local : {}", id);
        LocalDTO localDTO = localService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(localDTO));
    }

    /**
     * DELETE  /locals/:id : delete the "id" local.
     *
     * @param id the id of the localDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/locals/{id}")
    @Timed
    public ResponseEntity<Void> deleteLocal(@PathVariable Long id) {
        log.debug("REST request to delete Local : {}", id);
        localService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
