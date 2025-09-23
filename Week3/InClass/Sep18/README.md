# Accordions

Accordions are UI components that allow users to expand and collapse sections of content. They are useful for organizing information in a compact and interactive way.

## Features
- **Expandable Sections**: Users can click on a header to reveal or hide content.
- **Single or Multiple Open States**: Configure whether one or multiple sections can be open at a time.
- **Customizable Styles**: Modify the appearance to match your design system.

## Usage
1. Import the accordion component from `comp-lib`.
2. Define the sections with headers and content.
3. Configure props for behavior (e.g., `allowMultipleOpen`).

### Example
```jsx
import { Accordion } from 'comp-lib';

const ExampleAccordion = () => (
    <Accordion allowMultipleOpen={false}>
        <Accordion.Item title="Section 1">
            <p>Content for section 1.</p>
        </Accordion.Item>
        <Accordion.Item title="Section 2">
            <p>Content for section 2.</p>
        </Accordion.Item>
    </Accordion>
);

export default ExampleAccordion;
```

## Props
- `allowMultipleOpen` (boolean): Determines if multiple sections can be open simultaneously.
- `defaultOpen` (array): Specifies which sections are open by default.

## Styling
Use CSS classes or inline styles to customize the accordion's appearance.
