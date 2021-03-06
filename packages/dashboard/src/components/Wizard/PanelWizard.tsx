import { IPanelWizardProps, IPanelWizardStyles, IPanelWizardStyleProps } from './PanelWizard.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';
import { getPanelWizardStyles } from './PanelWizard.styles';
import { PanelWizardBase } from './PanelWizard.Base';

export const PanelWizard: (props: IPanelWizardProps) => JSX.Element = styled<IPanelWizardProps, IPanelWizardStyleProps, IPanelWizardStyles>(
  PanelWizardBase,
  getPanelWizardStyles,
  undefined,
  { scope: 'PanelWizard' }
);
