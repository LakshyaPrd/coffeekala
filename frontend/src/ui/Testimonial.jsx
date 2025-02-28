import React from 'react';
import { Avatar, Text, SimpleGrid, Container } from '@mantine/core';

export function Testimonial({ quote, name, designation, src }) {
  return (
    <Container size="xl" py="xl" className='mt-14 '>
      <SimpleGrid 
        cols={3} 
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'sm', cols: 1 }
        ]}
      >
        <div className="flex flex-col items-center max-w-sm px-4">
          {/* Avatar */}
          <Avatar
            src={src}
            size={120}
            radius={120}
            className="mx-auto mb-6"
          />
          
          {/* Review Text */}
          <Text  fz="md" mb={20} className='text-center'> {/* Increased margin-bottom for spacing */}
            {quote}
          </Text>
          
          {/* Name */}
          <Text ta="center" fz="lg" fw={600} className='mt-3'> {/* Added margin-top for spacing */}
            {name}
          </Text>
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default Testimonial;