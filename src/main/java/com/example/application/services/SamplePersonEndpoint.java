package com.example.application.services;

import com.example.application.data.SamplePerson;
import com.example.application.data.SamplePersonRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.Endpoint;
import com.vaadin.hilla.crud.CrudRepositoryService;
import com.vaadin.hilla.exception.EndpointException;
import java.util.Optional;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Endpoint
@AnonymousAllowed
public class SamplePersonEndpoint extends CrudRepositoryService<SamplePerson, Long, SamplePersonRepository> {

}
