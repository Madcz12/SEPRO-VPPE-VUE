<template>
  <div>
    <form-wizard shape="tab" color="#e67e22" :show-progress="false" vertical-tabs>
      <tab-content title="Fase 1">
        <h1>Inicio Hola mundo</h1>
        <v-row>
          <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
            <v-card variant="outlined">
              <v-form>
                <v-container fluid>
                  <v-row>
                    <v-col cols="2">
                      <v-list-subheader style="font-weight: 800;">Nombre del
                        Proyecto</v-list-subheader>
                    </v-col>

                    <v-col cols="8">
                      <v-text-field variant="outlined" v-model="nombreProyecto" label="Nombre del Proyecto"
                        required></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="2">
                      <v-list-subheader style="font-weight: 800;">Sector</v-list-subheader>
                    </v-col>

                    <v-col cols="8">
                      <v-text-field variant="outlined" v-model="sector" label="Sector" required></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="2">
                      <v-list-subheader style="font-weight: 800;">Empresa</v-list-subheader>
                    </v-col>

                    <v-col cols="8">
                      <v-text-field variant="outlined" v-model="empresa" label="Empresa" required></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="2">
                      <v-list-subheader style="font-weight: 800;">Objetivo del
                        Proyecto</v-list-subheader>
                    </v-col>
                    <v-col cols="8">
                      <!-- <v-textarea variant="outlined" v-model="alcanceProyecto" label="Objetivo del Proyecto"
                        required></v-textarea> -->

                        <QuillEditor theme="snow"/>
                        <br>
                    </v-col>
                  </v-row>
                  <br>
                  <v-row>
                    <v-col cols="2">
                      <v-list-subheader style="font-weight: 800;">Monto Inicial</v-list-subheader>
                    </v-col>

                    <v-col cols="8" style="margin-top: 3rem;">
                      <v-text-field variant="outlined" v-model="montoInicial" label="Monto Inicial" required
                        type="number"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card>

          </v-col>
        </v-row>
      </tab-content>
      <tab-content title="Fase 2">
        <h1>Analisis de Opciones</h1>
        <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                        <v-card variant="outlined">
                            <v-form ref="form">
                                <v-container fluid>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Designación del
                                                Gerente</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="designacionGerente"
                                                label="Designación del Gerente" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Tecnologia</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="tecnologia" label="Tecnologia"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Monto Inicial</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="montoInicial" label="Monto Inicial"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Cronograma</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="cronograma" label="Cronograma"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Alcance
                                                Preliminar</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="alcancePreliminar" label="Alcance Preliminar"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Permisos</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="permisologia" label="Permisos"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Gestion de adquisición a largo
                                                plazo</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">

                                            <v-checkbox v-model="gestionAdquisicionLargoPlazo"
                                                label="Gestión de adquisición a largo plazo"></v-checkbox>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
      </tab-content>
      <tab-content title="Fase 3">
        <h1>Definición</h1>
        <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                        <v-card variant="outlined">
                            <v-form>
                                <v-container fluid>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Precisión de
                                                Alcance</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="precisionAlcance"
                                                label="Precision de Alcance" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Empresa Contratista</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="empresa_contratista"
                                                label="Empresa Contratista" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Caso de Negocio</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-select variant="outlined" label="Caso de Negocio" :items="casoNegocio">

                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Identificación de
                                                Tecnologia</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="identificarTecnologia"
                                                label="Identificación de Tecnologia" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Alcance de Estudio</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-checkbox label="Mercado"></v-checkbox>
                                            <v-checkbox label="Tecnología"></v-checkbox>
                                            <v-checkbox label="Económico"></v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Ubicación</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="ubicacion"
                                                label="Ubicación" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>

                    </v-col>
                </v-row>
      </tab-content>
      <tab-content title="Fase 4">
        <h1>Ejecución</h1>
        <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                      <v-card variant="outlined">
                        <v-form ref="form">
                          <v-container fluid>
                            <v-checkbox v-model="procesoContratacion" label="Proceso de contratación"></v-checkbox>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field variant="outlined" v-model="avanceEjecucionProcura" label="Procura" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field variant="outlined" v-model="avanceEjecucionConstruccion" label="Construcción"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-text-field variant="outlined" v-model="avanceFinanciero" label="Porcentaje de información"
                                required></v-text-field>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field variant="outlined" v-model="avanceDocumentacionManuales" label="Porcentaje de manuales de operación y mantenimiento"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field variant="outlined" v-model="avanceDocumentacionPlanos" label="Planos así construidos"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field variant="outlined" v-model="avancePruebasEquipos" label="Equipos en vacio"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field variant="outlined" v-model="avancePruebasArranque" label="Pruebas de arranque"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-checkbox v-model="entrenamientoPersonal" label="Entrenamiento personal"></v-checkbox>
                            <v-text-field variant="outlined" v-model="pruebasGarantia" label="Pruebas de garantia" required></v-text-field>
                            <v-checkbox v-model="aceptacionProvisional" label="Aceptación Provisional"></v-checkbox>
                            <v-btn color="primary" @click="submit">
                                Enviar
                            </v-btn>
                          </v-container>
                        </v-form>
                      </v-card>
                    </v-col>
                </v-row>
      </tab-content>
      <tab-content title="Fase 5">
        <h1>Cierre</h1>
        <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                      <v-card variant="outlined">
                        <v-form ref="form">
                          <v-container fluid>
                            <v-row>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Operación Inicial</v-list-subheader>
                                    <v-checkbox label="Operación Inicial"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Pruebas de Aceptación Final</v-list-subheader>
                                    <v-checkbox label="Pruebas de Aceptación Final"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Entrenamiento a Usuarios</v-list-subheader>
                                    <v-checkbox label="Entrenamiento a Usuarios"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Completar Manuales de Operación y Mantenimiento</v-list-subheader>
                                    <v-checkbox label="Completar Manuales de Operación y Mantenimiento"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Concluir Documentos como Construido o Ejecutado</v-list-subheader>
                                    <v-checkbox label="Concluir Documentos como Construido o Ejecutado"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Cierre de Contratos</v-list-subheader>
                                    <v-checkbox label="Cierre de Contratos"></v-checkbox>
                                </v-col>
                                <v-row>
                                    <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Transferencia de Activos</v-list-subheader>
                                    <v-checkbox label="Transferencia de Activos"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Transferencia de Garantias</v-list-subheader>
                                    <v-checkbox label="Transferencia de Garantias"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Revisión Critica</v-list-subheader>
                                    <v-checkbox label="Revisión Critica"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Cierre de Proyecto</v-list-subheader>
                                    <v-checkbox label="Cierre de Proyecto"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-list-subheader style="font-weight: 800;">Evaluación post-mortem</v-list-subheader>
                                    <v-checkbox label="Evaluación post-mortem"></v-checkbox>
                                </v-col>
                                </v-row>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-card>
                    </v-col>
                </v-row>
      </tab-content>
    </form-wizard>
    <Vue3FormWizard />
  </div>
</template>

<script>
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { FormWizard, TabContent } from 'vue3-form-wizard';
export default {
  components: {
    Vue3FormWizard,
    FormWizard,
    TabContent
  },
  data() {
    return {
      nombreProyecto: "",
      sector: "",
      empresa: "",
      objetivoProyecto: "",
      alcanceProyecto: "",
      estudio: "",
      montoInicial: 0,
      estudios: ["Estudio de mercado", "Estudio de factibilidad", "Estudio de viabilidad"],
      casoNegocio: ["Mercado", "Tecnologia", "Economico-financiero"],
      designacionGerente: "",
      tecnologia: "",
      ubicacion: "",
      cronograma: "",
      precisionAlcance: "",
      tieneAlcancePreliminar: false,
      permisologias: ["Ninguna", "Permisos de construcción", "Permisos ambientales", "Permisos de seguridad"],
      permisologia: "",
      gestionAdquisicionLargoPlazo: false,
      baseProyecto: "",
      precisionSitioEjecucion: false,
      precisionInterrelaciones: false,
      obtencionPermisologia: false,
      asegurarTecnologiaProveedor: "",
      conclusionDisenoBasico: "",
      procesoContratacion: false,
      avanceEjecucionProcura: "",
      avanceEjecucionConstruccion: "",
      avanceFinanciero: "",
      avanceDocumentacionManuales: "",
      avanceDocumentacionPlanos: "",
      avancePruebasEquipos: "",
      avancePruebasArranque: "",
      entrenamientoPersonal: false,
      pruebasGarantia: "",
      aceptacionProvisional: "",
      pruebasAceptacionFinal: "",
      manualesOperacion: "",
      manualesMantenimiento: "",
      aceptacionFinal: "",
      cierreContratos: false,
      transferenciaActivos: "",
      transferenciaGarantias: "",
    };
  },
  props: {
    nextButtonText: {
      type: String,
      default: 'Next'
    },
    backButtonText: {
      type: String,
      default: 'Back'
    },
    finishButtonText: {
      type: String,
      default: 'Finish'
    },
  }
}
</script>
